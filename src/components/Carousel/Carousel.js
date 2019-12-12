import React from "react";
import { connect } from "react-redux";
import ItemCard from "../Card/ItemCard";
import OwlCarousel from "react-owl-carousel";

import { FingerprintSpinner } from "react-epic-spinners";
import VisibilitySensor from "react-visibility-sensor";

const Carousel = props => {
  const [loading, setLoading] = React.useState(props.ID === 0 ? false : true);

  const onVisibilityChange = isVisible => {
    if (isVisible) setTimeout(() => setLoading(false), 300);
  };

  const renderHTML = () => {
    return props.listCourse.map((item, index) => {
      return (
        <ItemCard
          course={item}
          className="item"
          id={index}
          key={index}
          ID={props.ID}
        />
      );
    });
  };

  return (
    <div className="courses container-fluid">
      {loading ? (
        <div
          style={{
            height: "327.72px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <VisibilitySensor onChange={onVisibilityChange}>
            <FingerprintSpinner color="#00cb54" size={70} className="mx-auto" />
          </VisibilitySensor>
        </div>
      ) : (
        <OwlCarousel
          className="owl-theme"
          margin={48}
          nav
          dotsEach
          responsiveClass
          mouseDrag={false}
          touchDrag={false}
          responsive={{
            0: {
              items: 2,
              slideBy: 2
            },
            600: {
              items: 3,
              slideBy: 3
            },
            992: {
              items: 5,
              slideBy: 5
            }
          }}
          key={`carousel_${props.listCourse.length}`}
        >
          {renderHTML()}
        </OwlCarousel>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    listCourse: state.khoaHocReducer.listCourse
  };
};

export default connect(mapStateToProps, null)(Carousel);
