import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Quiz from '../pages/Quiz';
import store from '../store';
import datas from '../utils/data.json';

describe("Quizpage", () => {
  test("Question progress", () => {
    render(
      <Provider store={store}>
        <Quiz />
      </Provider>
    );
    const linkElement = screen.getByText(`Question 1 / ${datas.length}`);
    expect(linkElement).toBeInTheDocument();
  });
});
