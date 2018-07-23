import React from "react";
import { connect } from "react-redux";
import selectors from "./selector";
import action from "./actions";
import HeaderButton from "../../Components/HeaderButton";
import TodoList from "../../Components/TodoList";
import Grid from "@material-ui/core/Grid";

class Header extends React.Component {
  render() {
    const { addATodo, todos } = this.props;
    return (
      <Grid container spacing={8} alignItems="center" justify="center">
        <Grid item xs={12}>
          <HeaderButton handleClick={addATodo} />
        </Grid>
        <TodoList data={todos}/>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  todos: selectors.getTodos(state)
});

const mapDispatchToProps = dispatch => ({
  addATodo: () => dispatch(action.addATodo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
