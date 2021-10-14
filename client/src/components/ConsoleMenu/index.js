import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CONSOLE,
  UPDATE_CURRENT_CONSOLE,
} from '../../utils/actions';
import { QUERY_CONSOLE } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function ConsoleMenu() {
  const [state, dispatch] = useStoreContext();

  const { consoles } = state;

  const { loading, data: consoleData } = useQuery(QUERY_CONSOLE);

  useEffect(() => {
    if (consoleData) {
      dispatch({
        type: UPDATE_CONSOLE,
        consoles: consoleData.consoles,
      });
      consoleData.consoles.forEach((console) => {
        idbPromise('consoles', 'put', console);
      });
    } else if (!loading) {
      idbPromise('consoles', 'get').then((consoles) => {
        dispatch({
          type: UPDATE_CURRENT_CONSOLE,
          consoles: consoles,
        });
      });
    }
  }, [consoleData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CONSOLE,
      currentConsole: id,
    });
  };

  return (
    <div>
      <h2>Choose a Console:</h2>
      {consoles.map((item) => (
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

export default ConsoleMenu;
