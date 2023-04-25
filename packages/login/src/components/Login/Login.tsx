import React from 'react';
import { Modal } from 'shared/components/Modal';
import { Form } from 'shared/components/Form';
import { Input } from 'shared/components/Input';
import { Label } from 'shared/components/Label';
import { ApplyButton, ButtonsContainer } from 'shared/components/Button';
import { InputsContainer } from 'shared/components/Input';

export const Login = () => {
  return (
    <>
      <Modal>
        <Form>
          <InputsContainer>
            <Label htmlFor='username'>Login</Label>
            <Input id='username' type='text' />
            <Label htmlFor='password'>Password</Label>
            <Input id='password' type='password' />
          </InputsContainer>
          <ButtonsContainer>
            <ApplyButton type='submit'>Sign in</ApplyButton>
          </ButtonsContainer>
        </Form>
      </Modal>
    </>
  );
};