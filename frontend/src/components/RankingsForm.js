import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { patchRankingsToAPI } from "../reducer/actions";
import { useDispatch } from "react-redux";


/**
 *  DESCRIPTION:
 *  PROPS: 
 *  FLOW: 
 *  PARENT: 
 *  CHILDREN: 
 */


function RankingsForm({ rankings }) {

  const dispatch = useDispatch()
  const r_apartment_url = rankings.apartment_url;
  const ranking_id = rankings.ranking_id;
  return (
    <div>
     <Formik
       initialValues={{ ranking_price: rankings.ranking_price || '',
                        ranking_location: rankings.ranking_location || '',
                        ranking_space: rankings.ranking_space || '',
                        ranking_privacy: rankings.ranking_privacy || '',
                        ranking_laundry: rankings.ranking_laundry || '',
                        ranking_parking: rankings.ranking_parking || '',
                        ranking_common_space : rankings.ranking_common_space || ''
                      }}
       validate={values => {
         const errors = {};
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           dispatch(patchRankingsToAPI({...values, r_apartment_url, ranking_id}))
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (

        // <div className="rankingInputContainer">
        // <label>Aggregate Score</label>
        // {}
        // </div>
         <Form>

           <div className="rankingInputContainer">
            <label>Price</label>
            <Field type="number" name="ranking_price" />
            <ErrorMessage name="ranking_price" component="div" />
           </div>
           <div className="rankingInputContainer">
            <label>Location</label>
            <Field type="number" name="ranking_location" />
            <ErrorMessage name="ranking_location" component="div" />
           </div>
           <div className="rankingInputContainer">
            <label>Space</label>
            <Field type="number" name="ranking_space" />
            <ErrorMessage name="ranking_space" component="div" />
           </div>
           <div className="rankingInputContainer">
            <label>Privacy</label>
            <Field type="number" name="ranking_privacy" />
            <ErrorMessage name="ranking_privacy" component="div" />
           </div>
           <div className="rankingInputContainer">
            <label>Laundry</label>
            <Field type="number" name="ranking_laundry" />
            <ErrorMessage name="ranking_laundry" component="div" />
           </div>
           <div className="rankingInputContainer">
            <label>Parking</label>
            <Field type="number" name="ranking_parking" />
            <ErrorMessage name="ranking_parking" component="div" />
           </div>
           <div className="rankingInputContainer">
            <label>Common Space</label>
            <Field type="number" name="ranking_common_space" />
            <ErrorMessage name="rankings_common_space" component="div" />
           </div>
           <div className="btn">
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
           </div>
         </Form>
       )}
     </Formik>
   </div>
 );
}

export default RankingsForm;