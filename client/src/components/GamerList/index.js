import React, { useEffect } from 'react';
import GamerItem from '../GamerItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_GAME } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_GAMES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function GamerList() {
  const [state, dispatch] = useStoreContext();

  const { currentGame } = state;

  const { loading, data } = useQuery(QUERY_GAMES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_GAME,
        game: data.game,
      });
      data.game.forEach((game) => {
        idbPromise('game', 'put', game);
      });
    } else if (!loading) {
      idbPromise('game', 'get').then((game) => {
        dispatch({
          type: UPDATE_GAME,
          game: game,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterGame() {
    if (!currentGame) {
      return state.game;
    }

    return state.game.filter(
      (game) => game.games._id === currentGame
    );
  }

  return (
    <div className="my-2">
      <h2>Our Games:</h2>
      {state.games.length ? (
        <div className="flex-row">
          {filterGame().map((game) => (
            <GamerItem
              key={game._id}
              _id={game._id}
              image={game.image}
              name={game.name}
              price={game.price}
              quantity={game.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>No games added yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default GamerList;
