import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import ContactForm from './ContactForm';

const FormMailContainer = ({ handleCompleted }) => {

  const stecsUrl = `https://stecs.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

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