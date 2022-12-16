import PropTypes from 'prop-types';
import { SectionLayout, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionLayout>
      <Title>{title}</Title>
      <div>{children}</div>
    </SectionLayout>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
