import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

/**
 *  DESCRIPTION:
 *  PROPS: 
 *  FLOW: 
 *  PARENT: 
 *  CHILDREN: 
 */


function RankingsForm({ rankings }) {


  return (
    <div>
     <h1>RankingsForm</h1>
     <Formik
       initialValues={{ price: '', location: '' }}
       validate={values => {
         const errors = {};
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <label>Price</label>
           <Field type="number" name="price" />
           <ErrorMessage name="price" component="div" />
           <label>Location</label>
           <Field type="number" name="location" />
           <ErrorMessage name="location" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
}

export default RankingsForm;