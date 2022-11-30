import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../../components'
import { Trans, useTranslation } from 'react-i18next'

function ProjectUpdatedEntry({ recordedBy, recordedAt, iconClass }) {
  const { t, i18n } = useTranslation()

  return (
    <div className="relative flex items-start space-x-3">
      <div>
        <div className="relative px-1">
          <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
            <Icon icon={iconClass} />
          </div>
        </div>
      </div>
      <div className="min-w-0 flex-1 py-1.5">
        <div className="text-sm text-gray-500">
          <Trans i18nKey="project.feed.updated" i18n={i18n} t={t}>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              {{ recordedBy }}
            </span>
          </Trans>
          <p className="text-xs whitespace-nowrap mt-1">{recordedAt}</p>
        </div>
      </div>
    </div>
  )
}
ProjectUpdatedEntry.propTypes = {
  recordedBy: PropTypes.string.isRequired,
  recordedAt: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired
}
export { ProjectUpdatedEntry }
