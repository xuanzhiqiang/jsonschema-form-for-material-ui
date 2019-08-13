import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dropzone from 'react-dropzone';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const pngFormat = require('../../image/png-format.png');
const pngFormatError = require('../../image/png-format-error.png');

const styles = theme => ({
  rootStyle: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleStyle: {
    display: 'flex',
    alignItems: 'center'
  },
  zoneStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  defaultImageStyle: {
    flexGrow: 1,
    minWidth: '64px',
    minHeight: '64px',
    objectFit: 'contain'
  },
  imageStyle: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  normalStyle: {
    borderStyle: 'dashed',
    borderWidth: 2,
    color: 'gray',
    borderRadius: 5
  },
  errorStyle: {
    borderStyle: 'dashed',
    borderWidth: 2,
    color: 'red',
    borderRadius: 5
  },
  progress: {
    width: '100%',
    position: 'absolute'
  },
  titleText: {},
  errorText: { color: 'red' },
  normalText: {},
  helperText: {
    marginTop: theme.spacing(1)
  }
});

class LinkplayDropZone extends React.Component {
  constructor(props) {
    super(props);

    this.image = null;
    this.state = {
      error: false,
      previewImage: ''
    };
  }

  componentDidMount() {
    this._renderPreview(this.props, {});
  }

  componentWillReceiveProps(nextProps) {
    this._renderPreview(this.props, nextProps);
  }

  _renderPreview = (props, nextProps) => {
    const { value: preValue = {}, previewType: preType } = props;
    const { value = {}, previewType } = nextProps;

    const { preview: prePreview = '' } = preValue;
    const { preview = '' } = value;

    if (prePreview !== preview || preType !== previewType) {
      let previewImage = '';
      if (preview) {
        if (previewType === 'svg') {
          previewImage = `data:image/svg+xml;utf-8,${preview}`;
        } else {
          previewImage = `data:image/png;base64,${preview}`;
        }
      }
      const { previewImage: oldPreviewImage } = this.state;
      if (previewImage !== oldPreviewImage) {
        this.setState({ previewImage });
      }
    }
  };

  onDropAccepted = files => {
    const tempImage = files[0];
    // eslint-disable-next-line no-undef
    const image = new Image();
    image.name = tempImage.name;
    image.src = URL.createObjectURL(tempImage);

    image.addEventListener('load', () => {
      this.setState({ previewImage: image.src, error: false, errorTip: ' ' });
      const { checkDropFile } = this.props;
      if (checkDropFile) {
        if (checkDropFile(image)) {
          this.uploadImage(tempImage);
        } else {
          this.setState({ error: true, errorTip: 'Check Error' });
        }
      }
    });
  };

  onDropRejected = () => {
    this.setState({ error: true, errorTip: 'Wrong Format' });
  };

  uploadImage = file => {
    const { onUploadImage } = this.props;
    if (onUploadImage) {
      onUploadImage(file);
    }
  };

  _renderContent = () => {
    const { classes } = this.props;
    const { previewImage, error } = this.state;

    if (error) {
      return (
        <img
          alt=""
          className={classes.defaultImageStyle}
          src={pngFormatError}
        />
      );
    }

    if (previewImage) {
      return <img alt="" className={classes.imageStyle} src={previewImage} />;
    }

    return <img alt="" className={classes.defaultImageStyle} src={pngFormat} />;
  };

  render() {
    const {
      classes,
      tip,
      accept,
      width,
      height,
      disabled,
      value = { uploading: false }
    } = this.props;
    const { error, errorTip } = this.state;
    return (
      <div>
        <Dropzone
          accept={accept}
          disabled={disabled}
          onDropAccepted={this.onDropAccepted}
          onDropRejected={this.onDropRejected}
        >
          {({ getRootProps, getInputProps }) => (
            <div className={classes.rootStyle}>
              <div className={classes.titleStyle}>
                <Typography
                  variant="body1"
                  className={classNames(
                    classes.titleText,
                    error ? classes.errorText : classes.normalText
                  )}
                  gutterBottom
                >
                  {tip}
                </Typography>
              </div>
              <div
                style={{ width, height }}
                {...getRootProps()}
                className={classNames(
                  classes.zoneStyle,
                  error ? classes.errorStyle : classes.normalStyle
                )}
              >
                <input {...getInputProps()} />
                {value.uploading ? (
                  <CircularProgress className={classes.progress} />
                ) : (
                  this._renderContent()
                )}
              </div>
            </div>
          )}
        </Dropzone>
        <Typography
          className={classNames(
            classes.helperText,
            error ? classes.errorText : classes.normalText
          )}
          variant="body1"
        >
          {errorTip}
        </Typography>
      </div>
    );
  }
}

LinkplayDropZone.propTypes = {
  disabled: PropTypes.bool,

  tip: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  previewType: PropTypes.string.isRequired,

  checkDropFile: PropTypes.func,
  onUploadImage: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object
};

// 为属性指定默认值:
LinkplayDropZone.defaultProps = {
  value: {
    preview: '',
    uploading: true
  },
  disabled: false,
  checkDropFile: undefined,
  onUploadImage: undefined
};

export default withStyles(styles)(LinkplayDropZone);
