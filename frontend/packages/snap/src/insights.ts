import {
  add0x,
  bytesToHex,
  hasProperty,
  isObject,
  remove0x,
} from '@metamask/utils';
import { decode } from '@metamask/abi-utils';
import { ethers } from 'ethers';

/**
 * As an example, get transaction insights by looking at the transaction data
 * and attempting to decode it.
 *
 * @param transaction - The transaction to get insights for.
 * @returns The transaction insights.
 */
export async function getInsights(transaction: Record<string, unknown>) {

  const returnObject: Record<string, unknown> = {
    message: 'Unknown transaction',
  };

  try {
    // Check if the transaction has data.
    if (
      !isObject(transaction) ||
      !hasProperty(transaction, 'data') ||
      typeof transaction.data !== 'string'
    ) {
      throw 'Transaction data received is not an object.';
    }

    returnObject.message = 'You are interacting with the SmartTrans contract';

    return returnObject;
  } catch (error) {
    console.error(error);
    return returnObject;
  }
}
