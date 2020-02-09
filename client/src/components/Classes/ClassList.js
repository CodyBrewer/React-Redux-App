import React from "react";
import { connect } from "react-redux";
import { fetchClasses, selectClass } from "../../store/actions";
import Classes from "./CharactarClasses";

const ClassList = props => {
  const { isFetching, fetch, classes, error, select } = props;

  return (
    <>
      {classes.length ? (
        <Classes classes={classes} select={select} />
      ) : isFetching ? (
        <p>We are fetching Classes</p>
      ) : (
        <button
          onClick={e => {
            e.preventDefault();
            fetch();
          }}
        >
          Get Class list!
        </button>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    classes: state.classes.classes,
    isFetching: state.classes.isFetching,
    error: state.classes.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => {
      dispatch(fetchClasses());
    },
    select: item => {
      dispatch(selectClass(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassList);
