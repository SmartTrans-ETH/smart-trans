import {
  OnRpcRequestHandler,
  OnTransactionHandler,
} from '@metamask/snaps-types';
import { panel, heading, text } from '@metamask/snaps-ui';
import { getInsights } from './insights';

/**
 * Handle an incoming transaction, and return any insights.
 *
 * @param args - The request handler args as object.
 * @param args.transaction - The transaction object.
 * @returns The transaction insights.
 */
export const onTransaction: OnTransactionHandler = async () => {

  return {
    content: panel([
      heading('My Transaction Insights'),
      // text('Here are the insights:'),
      text('You are interacting with the SmartTrans contract'),
    ]),
  };
};

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}) => {
  const res = await fetch(
    'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=BRL',
  );
  const prices = await res.json();
  const transactionValue =
    (request.params.ticketNumber * 4.4) / prices.RAW.ETH.BRL.PRICE;
  switch (request.method) {
    case 'confirm':
      return await snap.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: `Certeza que deseja comprar ${request.params.ticketNumber} cota(s)?`,
            description: `Cada cota custa R$4.40`,
            textAreaContent: `Visto que 1ETH equivale a R\$${prices.RAW.ETH.BRL.PRICE}, a transação que você está fazendo vai custar aproximadamente ${transactionValue}ETH + taxas de gas`,
          },
        ],
      });

    default:
      throw new Error('Method not found.');
  }
};
