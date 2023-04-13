import { render, screen, fireEvent } from '@testing-library/react';
import { toast } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import ResetPassword from './ResetPassword';
import user from '@testing-library/user-event';

jest.mock('react-hot-toast');

describe('Reset Password Page', () => {  
    it('renders reset password page title', () => {
        render(
            <BrowserRouter>
                <ResetPassword />
            </BrowserRouter>
        )
        expect(screen.getByRole('heading', {  name: /reset password @ intrepid/i})).toBeInTheDocument()
    });

    it('renders one time key note', () => {
        render(
            <BrowserRouter>
                <ResetPassword />
            </BrowserRouter>
        )
        expect(screen.getByText(/one time key:/i)).toBeInTheDocument()
    });

    it('renders the email textbox', () => {
        render(
            <BrowserRouter>
                <ResetPassword />
            </BrowserRouter>
        )
        expect(screen.getByRole('textbox', {  name: /your email/i})).toBeInTheDocument()
    });

    it('renders the password textbox', () => {
        render(
            <BrowserRouter>
                <ResetPassword />
            </BrowserRouter>
        )
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    });

    it('renders the reset password button', () => {
        render(
            <BrowserRouter>
                <ResetPassword />
            </BrowserRouter>
        )
        expect(screen.getByRole('button', {  name: /reset password/i})).toBeInTheDocument()
    });

 
});
