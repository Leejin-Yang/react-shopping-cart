import PaginationButton from "component/@shared/PaginationButton/PaginationButton";

export default {
  title: "PaginationButton",
  component: PaginationButton,
};

export const DefaultPaginationButton = (args) => (
  <PaginationButton {...args}>1</PaginationButton>
);
DefaultPaginationButton.args = {};
