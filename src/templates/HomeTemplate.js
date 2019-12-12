import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./../layout/header/header";
import Signup from "./../pages/home/form/signup/newsign_up";
import Login from "./../pages/home/form/login/newlogin";
import Footer from "./../layout/footer/footer";
import VisibilitySensor from "react-visibility-sensor";
import { FlowerSpinner } from "react-epic-spinners";
import BackGround from "../components/BackGround/BackGround";

const HomeLayout = props => {
  const [loading, setLoading] = React.useState(true);
  const onVisibilityChange = isVisible => {
    if (isVisible) setTimeout(() => setLoading(false), 1500);
  };
  return (
    <div>
      {loading ? (
        <div>
          <BackGround></BackGround>

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)"
            }}
          >
            <VisibilitySensor onChange={onVisibilityChange}>
              <FlowerSpinner color="#ffffff" size={70} />
            </VisibilitySensor>
          </div>
        </div>
      ) : (
        <Fragment>
          <Header />
          <Signup />
          <Login />
          {props.children}
          <Footer />
        </Fragment>
      )}
    </div>
  );
};

const HomeTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={propsComponent => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
        /* return <Component {...propsComponent} children={props.children}/>; */
      }}
    />
  );
};

export default HomeTemplate;
