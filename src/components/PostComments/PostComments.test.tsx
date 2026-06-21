import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários', () => {
        render(<PostComment />);

        const commentInput = screen.getByTestId('comment-input');
        const commentSubmit = screen.getByTestId('comment-submit');

        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(commentSubmit);

        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(commentSubmit);

        const comments = screen.getAllByTestId('comment-item');
        expect(comments).toHaveLength(2);
        expect(comments[0]).toHaveTextContent('Primeiro comentário');
        expect(comments[1]).toHaveTextContent('Segundo comentário');
    });
});
