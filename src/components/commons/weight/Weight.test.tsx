import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../../App';
import {
  createMockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';
import { Weight } from './Weight';
import i18n from '../../../translations/i18n';


describe('Weight Test', () => {

  beforeAll(() => {
    const environment = createMockEnvironment();
    i18n.init();

  })
  test('Transform gramme to kg', () => {
    render(<Weight weight={10500} />);
    const linkElement = screen.getByText(/10.5/i);
    expect(linkElement).toBeInTheDocument();
  });
})
