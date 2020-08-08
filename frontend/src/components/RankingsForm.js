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
           <label>Space</label>
           <Field type="number" name="space" />
           <ErrorMessage name="space" component="div" />
           <label>Privacy</label>
           <Field type="number" name="privacy" />
           <ErrorMessage name="privacy" component="div" />
           <label>Laundry</label>
           <Field type="number" name="laundry" />
           <ErrorMessage name="laundry" component="div" />
           <label>Parking</label>
           <Field type="number" name="parking" />
           <ErrorMessage name="parking" component="div" />
           <label>Living Room</label>
           <Field type="number" name="living-room" />
           <ErrorMessage name="living-room" component="div" />
           <label>House Type</label>
           <Field type="number" name="house-type" />
           <ErrorMessage name="house-type" component="div" />
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