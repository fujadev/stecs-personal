import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const validateForm = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  last_name: Yup.string().required("Last name is required."),
  email: Yup.string().email("Should be valid email.").required("Email field is required"),
  occupation: Yup.string().required("Occupation is required."),
  agree: Yup.boolean().oneOf([true], "Please comfirm you agree to receive emails.")
})

const ContactForm = ({ status, message, mailValidateCompleted, handleCompleted }) => {

  useEffect(() => {
    if (status === "success" && message !== '') {
      handleCompleted();
    }
  }, [status, message]);

  return (
    <Formik
      initialValues={{
        name: '',
        last_name: '',
        email: '',
        occupation: '',
        agree: '',
      }}
      validationSchema={validateForm}
      onSubmit={(vals, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        const payload = {
          MERGE1: vals.name,
          MERGE2: vals.last_name,
          MERGE0: vals.email,
          MERGE3: vals.occupation
        }
        mailValidateCompleted(payload)
        resetForm();
      }}>
      {
        ({
          errors,
          values,
          touched,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <section>
              {
                (status === "error") &&
                <div className="alert alert-danger">{message}</div>
              }
              <div className='row'>
                {/* {JSON.stringify(errors, null, 2)} */}
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>First name</label>
                    <Field className='form-control'
                      value={values.name}
                      name="name"
                      placeholder='e.g Richard' />
                    {
                      (touched.name && errors.name) && <span className='errors'>{errors.name}</span>
                    }
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Last name</label>
                    <Field className='form-control'
                      value={values.last_name}
                      name="last_name"
                      placeholder='e.g Raymond' />
                    {
                      (touched.last_name && errors.last_name) && <span className='errors'>{errors.last_name}</span>
                    }
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='form-group'>
                    <label>Email</label>
                    <Field className='form-control'
                      value={values.email}
                      name="email"
                      placeholder='Email address' />
                    {
                      (touched.email && errors.email) && <span className='errors'>{errors.email}</span>
                    }
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='custom-label'>What do you do?</div>
                  <div className='wrap-checker'>
                    <div className='custom-radio-view'>
                      <label>
                        <Field type="radio" name='occupation' value="Student" />
                        <span>student</span>
                      </label>
                    </div>
                    <div className='custom-radio-view'>
                      <label>
                        <Field type="radio" name='occupation' value="Employed" />
                        <span>employed</span>
                      </label>
                    </div>
                    <div className='custom-radio-view'>
                      <label>
                        <Field type="radio" name='occupation' value="Self Employed" />
                        <span>self employed</span>
                      </label>
                    </div>
                    <div className='custom-radio-view'>
                      <label>
                        <Field type="radio" name='occupation' value="Business Owner" />
                        <span>business owner</span>
                      </label>
                    </div>

                  </div>
                  {
                    (touched.occupation && errors.occupation) && <span className='errors'>{errors.occupation}</span>
                  }
                </div>
                <div className='col-md-12'>
                  <div className="custom-check-view">

                    <Field type="checkbox" name="agree" className="check-view" id="agree" />
                    <label htmlFor="agree">You agree to receive  emails from us, no spam.</label>
                  </div>
                  {
                    (errors.agree) && <div className="alert alert-danger">{errors.agree}</div>
                  }
                </div>
                <div className='btn-set center'>
                  <button className='btn btn-primary' type='submit'>
                    {
                      status === "sending" ? "Submitting" : 'Give me early access to Stecs!'
                    }
                  </button>
                </div>

              </div>
            </section>
          </form>
        )
      }
    </Formik>
  )
}

export default ContactForm;