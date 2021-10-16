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

  const { currentConsole } = state;

  const { loading, data } = useQuery(QUERY_GAMES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_GAME,
        games: data.games,
      });
      data.games.forEach((game) => {
        idbPromise('games', 'put', game);
      });
    } else if (!loading) {
      idbPromise('games', 'get').then((games) => {
        dispatch({
          type: UPDATE_GAME,
          games: games,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterGame() {
    if (!currentConsole) {
      return state.games;
    }

    return state.games.filter(
      (game) => game.console._id === currentConsole
    );
  }

  return (
    <div className="my-2">
      <h2>Our Games:</h2>
      {state.games.length ? (
        <div className="flex-row">
          {filterGame().map((games) => (
            <GamerItem
              key={games._id}
              _id={games._id}
              image={games.image}
              name={games.name}
              price={games.price}
              quantity={games.quantity}
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
