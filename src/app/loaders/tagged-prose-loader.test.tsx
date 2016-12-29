import * as React from 'react';
import * as R from 'ramda';
import { expect } from 'chai';
const md = require('./example.md?tagged-prose').default;

describe('Tagged Prose Loader', () => {
  it('Returns the expected keys', () => {
    expect(R.keys(md)).eql([ 'refund_process', 'ach_payment_pending' ]);
  });

  it('Generates FAQ components for #refund_process', () => {
    const question = "I've returned a purchase. How does the refund process work?";
    const answer = (
      "Returns are subject to the merchant's return policy. As soon as the merchant " +
      "processes your return, Affirm will record the refund. If you receive a full "  +
      "refund, you'll no longer need to make payments."
    );

    expect(md.refund_process).eql({
      name:     'refund_process',
      question: <div>{question}</div>,
      answer:   <div>{answer}</div>,
      text:     { question, answer },
    });
  });
});
