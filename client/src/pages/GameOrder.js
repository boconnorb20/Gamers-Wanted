import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function GameOrder() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function storeOrder() {
      const cart = await idbPromise('cart', 'get');
      const games = cart.map((item) => item._id);

      if (games.length) {
        const { data } = await addOrder({ variables: { games } });
        const gameData = data.addOrder.games;

        gameData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    storeOrder();
  }, [addOrder]);

  return (
    <div>
      <Jumbotron>
        <h1>YES!</h1>
        <h2>Thank you from Gamers-Wanted!</h2>
        <h2>Now get back to the home page and check out what else we have!</h2>
      </Jumbotron>
    </div>
  );
}

export default GameOrder;
