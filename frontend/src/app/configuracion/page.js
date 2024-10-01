"use client"
import React, { useEffect } from 'react';
import useUserAuthenticated from '../hooks/useUserAuthenticated';
import { redirect } from 'next/navigation';
import { EmailUpdate } from '../components/layouts/settings/EmailUpdate';
import { PasswordUpdate } from '../components/layouts/settings/PasswordUpdate';
import { PhoneUpdate } from '../components/layouts/settings/PhoneUpdate';
import { AddressUpdate } from '../components/layouts/settings/AddressUpdate';
import { DeleteAccount } from '../components/layouts/settings/DeleteAccount';

export default function Configuracion() {
  const { isAuthenticated, loading } = useUserAuthenticated();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      redirect('/');
    }
  }, [isAuthenticated, loading]);



  return (
    <div>
      <EmailUpdate />
      <PasswordUpdate />
      <PhoneUpdate />
      <AddressUpdate />
      <DeleteAccount />


    </div>
  );
}
