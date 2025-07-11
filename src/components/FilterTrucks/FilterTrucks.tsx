import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import type { RootState } from "../../redux/store";
import { changeFilter } from "../../redux/filters/slice";
import { equipmentData, typeData } from "../../constants/index";
import s from "./FilterTrucks.module.css";
import Button from "../Button/Button";
import { resetVisibleCount } from "../../redux/pagination/slice";
import { closeModal } from "../../redux/modal/slice";
import CubeLoader from "../CubeLoader/CubeLoader";
import SearchLogic from "../SearchLogic/SearchLogic";

const FilterTrucks: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const featureOptions = Object.entries(equipmentData)
    .filter(([_, value]) => value.type === "boolean")
    .map(([key]) => key);
  const formOptions = typeData.map((type) => type.key);
  const [isSearching, setIsSearching] = useState(false);
  const [searchLocked, setSearchLocked] = useState(false);

  return (
    <Formik
      key={JSON.stringify(filters)}       
      enableReinitialize                 
      initialValues={{
        location: filters.location || "",
        features: filters.features || [],
        form: filters.form || "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(changeFilter(values));
        dispatch(resetVisibleCount());
        dispatch(closeModal("filters"));
        setIsSearching(true);
        setSearchLocked(true);
        setTimeout(() => {
          setIsSearching(false);
          setSubmitting(false);
        }, 3000);
      }}
    >
      {({ values, resetForm }) => {
        const isFilterEmpty =
          !values.location.trim() &&
          values.features.length === 0 &&
          !values.form;

        const isSearchDisabled = isFilterEmpty || searchLocked;
        const isResethDisabled = !isFilterEmpty;

        const handleReset = () => {
          resetForm();
          dispatch(changeFilter({ location: "", features: [], form: "" }));
          dispatch(resetVisibleCount());
          setIsSearching(true);
          setSearchLocked(false);
          setTimeout(() => {
            setIsSearching(false);
          }, 3000);
        };

        return (
          <Form className={s.form}>
            <SearchLogic searchLocked={searchLocked} setSearchLocked={setSearchLocked} />
            {/* Location */}
            <label className={s.labelLocation}>
              <svg className={s.iconMap} width="20" height="20" fill="currentColor">
                <use href="/sprite.svg#icon-map" />
              </svg>
              Location
              <Field
                className={s.inputLocation}
                name="location"
                type="text"
                placeholder="City"
              />
            </label>

            <p className={s.pFilter}>Filter</p>

            {/* Equipment */}
            <h3 className={s.title}>Vehicle equipment</h3>
            <div className={s.equipmentContainer}>
              {featureOptions.map((feature) => {
                const { label, icon } = equipmentData[feature];
                return (
                  <label className={s.labelEquipment} key={feature}>
                    <Field
                      className={s.inputEquipment}
                      type="checkbox"
                      name="features"
                      value={feature}
                    />
                    <svg width="32" height="32" style={{ marginRight: 4 }}>
                      <use href={`/sprite.svg#${icon}`} />
                    </svg>
                    {label}
                  </label>
                );
              })}
            </div>

            {/* Vehicle type */}
            <h3 className={s.title}>Vehicle type</h3>
            <div className={s.typeContainer}>
              {formOptions.map((formKey) => {
                const typeItem = typeData.find((t) => t.key === formKey);
                return (
                  <label className={s.labelType} key={formKey}>
                    <Field
                      className={s.inputType}
                      type="radio"
                      name="form"
                      value={formKey}
                      style={{ marginRight: 4 }}
                    />
                    <svg width="32" height="32">
                      <use href={`/sprite.svg#${typeItem?.icon || ""}`} />
                    </svg>
                    {typeItem?.label || formKey}
                  </label>
                );
              })}
            </div>

            {/* Buttons */}
            <div className={s.buttonContainer}>
              <Button
                type="button"
                className="search"
                onClick={handleReset}
                disabled={!isResethDisabled}
              >
                Reset
              </Button>
              <Button
                type="submit"
                className="search"
                disabled={isSearchDisabled}
              >
                Search
              </Button>
              {isSearching && <CubeLoader />}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FilterTrucks;
