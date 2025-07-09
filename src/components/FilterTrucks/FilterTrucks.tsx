import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import type { RootState } from "../../redux/store";
import { changeFilter } from "../../redux/filters/slice";
import { equipmentData, typeData } from "../../constants/index";
import s from "./FilterTrucks.module.css";
import Button from "../Button/Button";
import { resetVisibleCount } from "../../redux/pagination/slice";

const FilterTrucks: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  const featureOptions = Object.entries(equipmentData)
    .filter(([_, value]) => value.type === "boolean")
    .map(([key]) => key);

  const formOptions = typeData.map((type) => type.key);

  return (
    <Formik
      initialValues={{
        location: filters.location || "",
        features: filters.features || [],
        form: filters.form || "",
      }}
      onSubmit={(values) => {
        dispatch(
          changeFilter({
            location: values.location,
            features: values.features,
            form: values.form,
          })
        );
        dispatch(resetVisibleCount());
      }}
    >
      {({ values, resetForm }) => (
        <Form className={s.form}>
          {/* Пошук локації */}
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

          {/* Особливості - чекбокси */}
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

          {/* Радіо кнопки для форм */}
          <h3 className={s.title}>Vehicle type</h3>
          <div className={s.typeContainer}>
            {formOptions.map((formKey) => {
              const typeItem = typeData.find((t) => t.key === formKey);
              const label = typeItem?.label || formKey;
              const icon = typeItem?.icon || "";

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
                    <use href={`/sprite.svg#${icon}`} />
                  </svg>
                  {label}
                </label>
              );
            })}
          </div>

          {/* Кнопки пошуку та скидання */}
          <div className={s.buttonContainer}>            

            <Button
              type="button"
              className="search"
              onClick={() => {
                resetForm();
                dispatch(
                  changeFilter({
                    location: "",
                    features: [],
                    form: "",
                  })
                );
                dispatch(resetVisibleCount());
              }}
            >
              Reset
            </Button>

            <Button type="submit" className="search">
              Search
            </Button>
            
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FilterTrucks;
