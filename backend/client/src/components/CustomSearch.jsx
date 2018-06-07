import PropTypes from 'prop-types'
import React from 'react'
import { Label } from 'semantic-ui-react'

import SemanticSearch from './SemanticSearch'

const resultRenderer = ({ title }) => <Label content={title} />

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

const CustomSearch = () => <SemanticSearch resultRenderer={resultRenderer} />

export default CustomSearch;