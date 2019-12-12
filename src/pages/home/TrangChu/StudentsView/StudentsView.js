import React from "react";
import { connect } from "react-redux";
import ItemCard from "../../../../components/Card/ItemCard";
import OwlCarousel from "react-owl-carousel";

const StudentsView = props => {
  let listCourse = [...props.listCourse];
  let sortArray = listCourse.sort((a, b) => {
    return b.luotXem - a.luotXem;
  });

  const studentAreViewing = sortArray.slice(0, 5);

  const renderHTML = () => {
    return studentAreViewing.map((item, index) => {
      return (
        <ItemCard
          course={item}
          className="item"
          id={index}
          ID="student"
          key={index}
        />
      );
    });
  };

  return (
    <div className="courses container-fluid">
      <div className="courses__title">Students are viewing</div>
      <OwlCarousel
        className="owl-theme"
        margin={48}
        nav={false}
        dotsEach={false}
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
        key={`carousel_${studentAreViewing.length}`}
      >
        {renderHTML()}
      </OwlCarousel>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    listCourse: state.khoaHocReducer.listCourse
  };
};

export default connect(mapStateToProps, null)(StudentsView);
