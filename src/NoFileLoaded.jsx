import React, { memo } from 'react';

import i18n from 'i18next';
import { useTranslation, Trans } from 'react-i18next';

import SetCutpointButton from './components/SetCutpointButton';
import SimpleModeButton from './components/SimpleModeButton';
import useUserSettings from './hooks/useUserSettings';

const NoFileLoaded = memo(({ currentCutSeg }) => {
  const { t } = useTranslation();
  const { simpleMode, toggleSimpleMode } = useUserSettings();

  return (
    <div className="no-user-select" style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, border: '2vmin dashed #252525', color: '#505050', margin: '5vmin', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', whiteSpace: 'nowrap' }}>
      <div style={{ fontSize: '6vmin', textTransform: 'uppercase' }}>{t('DROP FILE(S)')}</div>

      <div style={{ fontSize: '3vmin', color: '#777', marginBottom: '.3em' }}>
        <Trans>See <b>Help</b> menu for help</Trans>
      </div>

      <div style={{ fontSize: '3vmin', color: '#ccc' }}>
        <Trans><SetCutpointButton currentCutSeg={currentCutSeg} side="start" style={{ verticalAlign: 'middle' }} /> <SetCutpointButton currentCutSeg={currentCutSeg} side="end" style={{ verticalAlign: 'middle' }} /> or <kbd>I</kbd> <kbd>O</kbd> to set cutpoints</Trans>
      </div>

      <div style={{ fontSize: '3vmin', color: '#ccc', cursor: 'pointer' }} role="button" onClick={toggleSimpleMode}>
        <SimpleModeButton style={{ verticalAlign: 'middle' }} size={16} /> {simpleMode ? i18n.t('to show advanced view') : i18n.t('to show simple view')}
      </div>
    </div>
  );
});

export default NoFileLoaded;
