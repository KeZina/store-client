import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'shared/components/Modal';
import { Form } from 'shared/components/Form';
import { Input } from 'shared/components/Input';
import { Label } from 'shared/components/Label';
import { ErrorMessage } from 'shared/components/ErrorMessage';
import { ApplyButton, ButtonsContainer } from 'shared/components/Button';
import { InputsContainer } from 'shared/components/Input';
import { useLogin } from 'login/hooks/useLogin/useLogin';
import { ICredentials } from 'login/interfaces/user';

export const Login = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<ICredentials>();
  const {handleSubmit: onSubmit} = useLogin();

  const nameError = useMemo(() => {
    switch(errors.name?.type) {
    case 'required':
      return <ErrorMessage>Name is required</ErrorMessage>;
    case 'maxLength':
      return <ErrorMessage>Name length is too long</ErrorMessage>;
    }
  }, [errors.name]);

  const passwordError = useMemo(() => {
    switch(errors.password?.type) {
    case 'required':
      return <ErrorMessage>Password is required</ErrorMessage>;
    case 'minLength':
      return <ErrorMessage>Password length is too short</ErrorMessage>;
    }
  }, [errors.password]);

  return (
    <>
      <Modal>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputsContainer>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' type='text' {...register('name', {required: true, maxLength: 20})} />
            {nameError}
            <Label htmlFor='password'>Password</Label>
            <Input id='password' type='password' {...register('password', {required: true, minLength: 6})} />
            {passwordError}
          </InputsContainer>
          <ButtonsContainer>
            <ApplyButton type='submit'>Sign in</ApplyButton>
          </ButtonsContainer>
        </Form>
      </Modal>
    </>
  );
};