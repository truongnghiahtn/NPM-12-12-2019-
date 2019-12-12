import React from "react";
import { connect } from "react-redux";
import ItemCard from "../../../../components/Card/ItemCard";
import OwlCarousel from "react-owl-carousel";

const SearchDefault = props => {
  let listCourse = [...props.listCourse];

  listCourse = listCourse.filter(course => {
    return (
      course.tenKhoaHoc.toLowerCase().indexOf("REACT".toLowerCase()) > -1 ||
      course.moTa.toLowerCase().indexOf("REACT".toLowerCase()) > -1
    );
  });

  const listSearch = listCourse.slice(0, 5);

  const renderHTML = () => {
    return listSearch.map((item, index) => {
      return (
        <ItemCard
          course={item}
          className="item"
          id={index}
          ID="react"
          key={index}
        />
      );
    });
  };
  return (
    <div className="courses container-fluid">
      <div className="courses__title">Because you searched for "react"</div>
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
        key={`carousel_${listSearch.length}`}
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

export default connect(mapStateToProps, null)(SearchDefault);
