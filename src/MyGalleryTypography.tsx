import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils';
import MuiTypography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    markedH2: {
      height: 4,
      width: 73,
      display: 'block',
      margin: `${theme.spacing(1)}px auto 0`,
      backgroundColor: theme.palette.secondary.main,
    },
    markedH3: {
      height: 4,
      width: 55,
      display: 'block',
      margin: `${theme.spacing(1)}px auto 0`,
      backgroundColor: theme.palette.secondary.main,
    },
    markedH4: {
      height: 4,
      width: 55,
      display: 'block',
      margin: `${theme.spacing(1)}px auto 0`,
      backgroundColor: theme.palette.secondary.main,
    },
    markedH6: {
      height: 2,
      width: 28,
      display: 'block',
      marginTop: theme.spacing(0.5),
      background: 'currentColor',
    },
  }));

const variantMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3',
};

type Props = {
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>,
  marked?: false | 'center' | 'left',
  variant: 'h2' | 'h3' | 'h4' | 'h6',
  color?: "inherit" | "initial" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error" | undefined,
  align?: "left" | "right" | "inherit" | "center" | "justify" | undefined,
  className?: string,
  children: React.ReactNode;
};

export default function GalleryTypography(props: Props) {
  const classes: { [index: string]: string } = useStyles();
  const { children, marked = false, variant, ...other } = props;

  return (
    <MuiTypography variantMapping={variantMapping} variant={variant} {...other}>
      {children}
      {marked ? (
        <span className={classes[`marked${capitalize(variant)}`]} />
      ) : null}
    </MuiTypography>
  );
}

/* ProjectGalleryTypography.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  marked: PropTypes.oneOf([false, 'center', 'left']),
  variant: PropTypes.string,
}; */
