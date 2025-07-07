import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import type { RootState } from "../../redux/store";
import { changeFilter } from "../../redux/filters/slice";
import { equipmentData, typeData } from "../../constants/index";
import s from "./FilterTrucks.module.css";

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
      }}
    >
      {({ values }) => (
        <Form style={{ padding: 16, border: "1px solid #ccc", borderRadius: 8 }}>
          {/* Пошук локації */}
          <div>
            <label>
              Location
              <Field
                name="location"
                type="text"
                placeholder="Введи локацію"
                style={{ marginLeft: 8 }}
              />
            </label>
          </div>

          {/* Особливості - чекбокси */}
          <div style={{ marginTop: 16 }}>
            <h3>Vehicle equipment</h3>
            {featureOptions.map((feature) => {
              const { label, icon } = equipmentData[feature];
              return (
                <label
                  key={feature}
                  style={{
                    marginRight: 16,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Field
                    type="checkbox"
                    name="features"
                    value={feature}
                    style={{ marginRight: 4 }}
                  />
                  <svg width="16" height="16" style={{ marginRight: 4 }}>
                    <use href={`/sprite.svg#${icon}`} />
                  </svg>
                  {label}
                </label>
              );
            })}
          </div>

          {/* Радіо кнопки для форм */}
          <div style={{ marginTop: 16 }}>
            <h3>Vehicle type</h3>
            {formOptions.map((formKey) => {
              const typeItem = typeData.find((t) => t.key === formKey);
              const label = typeItem?.label || formKey;
              const icon = typeItem?.icon || "";

              return (
                <label
                  key={formKey}
                  style={{
                    marginRight: 16,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Field
                    type="radio"
                    name="form"
                    value={formKey}
                    style={{ marginRight: 4 }}
                  />
                  <svg width="16" height="16" style={{ marginRight: 4 }}>
                    <use href={`/sprite.svg#${icon}`} />
                  </svg>
                  {label}
                </label>
              );
            })}
          </div>

          {/* Кнопка застосування фільтрів */}
          <div style={{ marginTop: 16 }}>
            <button
              type="submit"
              style={{
                padding: "8px 16px",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FilterTrucks;
