import { Button, Tooltip, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { ArrowReset24Filled } from '@fluentui/react-icons';
import React from 'react';
import { usePdtSerializedData } from '../contexts/PdtSerializedData';

const useStyles = makeStyles({
  aside: {
    position: 'absolute',
    bottom: '0',
    alignSelf: 'flex-end',
    zIndex: '1',
    ...shorthands.margin(tokens.spacingHorizontalL),
  },
});

export const SidePanel = React.memo(() => {
  const styles = useStyles();
  const [, recalculatePdtData] = usePdtSerializedData();
  return (
    <aside className={styles.aside}>
      <Tooltip relationship="label" content="Reload">
        <Button
          appearance="secondary"
          icon={<ArrowReset24Filled />}
          iconPosition="after"
          onClick={recalculatePdtData}
        />
      </Tooltip>
    </aside>
  );
});
