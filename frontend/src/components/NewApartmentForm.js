import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addApartmentToAPI } from "../reducer/actions";

/**
 *  DESCRIPTION: Component that renders a form which accepts a craigslist URL. Fires off a chain of events leading to an apartment being scraped from craigslist and 
 *               added into the database as well as the Redux state object.
 *  PROPS: N/A
 *  FLOW: App => Routes => HomeContainer => Home => NewApartmentForm
 *  PARENT: Home
 *  CHILDREN: N/A
 */

function NewApartmentForm() {


  const dispatch = useDispatch()

  return (
    <div>
     <Formik
       initialValues={{ url: ''
                      }}
       validate={values => {
         const errors = {};
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(async () => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(true);
           dispatch(addApartmentToAPI(values.url))
           setSubmitting(false);

         }, 4000);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <label>Add an apartment</label>
           <Field type="text" name="url" placeholder="https://exloc.craigslist.org/exloc/ex/ex/example-listing/99999999.html" />
           <ErrorMessage name="url" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
}

export default NewApartmentForm;