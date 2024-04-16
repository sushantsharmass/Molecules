import { ProfileCard } from "./ProfileCard";

import { within, userEvent, expect } from '@storybook/test';

export default {
    title: 'Example/Card/ProfileCard',
    component: ProfileCard, 
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes:{
        backgroundColor: {control: 'color'},
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args





// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const First = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const loginButton = canvas.getByRole('div', { name: /profile-button/i });
        await expect(loginButton).toBeInTheDocument();
        await userEvent.click(loginButton);
        await expect(loginButton).not.toBeInTheDocument();
    
        const logoutButton = canvas.getByRole('div', { name: /profile-button/i });
        await expect(logoutButton).toBeInTheDocument();
      }
  };
  