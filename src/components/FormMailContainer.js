import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import ContactForm from './ContactForm';

const FormMailContainer = ({ handleCompleted }) => {

  // const stecsUrl = `https://stecs.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  const stecsUrl = `https://stecs.us14.list-manage.com/subscribe/post?u=6fe95b8956afaf57721852c18&id=1f0e02e326`;

  return (
    <MailchimpSubscribe
      url={stecsUrl}
      render={({
        status,
        subscribe,
        message
      }) => (
        <ContactForm
          status={status}
          message={message}
          handleCompleted={handleCompleted}
          mailValidateCompleted={formData => subscribe(formData)}
        />
      )}
    />
  )
}

export default FormMailContainer;