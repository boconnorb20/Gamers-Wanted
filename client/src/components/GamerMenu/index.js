import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_GAME,
  UPDATE_ALL_GAMES,
} from '../../utils/actions';
import { QUERY_ALL_GAMES, QUERY_GAMES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function GamerMenu() {
  const [state, dispatch] = useStoreContext();

  const { games } = state;

  const { loading, data: gameData } = useQuery(QUERY_ALL_GAMES, QUERY_GAMES);

  useEffect(() => {
    if (gameData) {
      dispatch({
        type: UPDATE_ALL_GAMES,
        games: gameData.games,
      });
      gameData.games.forEach((game) => {
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
  }, [gameData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_GAME,
      currentGame: id,
    });
  };

  return (
    <div>
      <h2>Choose a Game:</h2>
      {games.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default GamerMenu;
