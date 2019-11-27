import React, { useMemo, useState } from 'react';
import { useFloorMapDispatcher, useFloorMapEntry } from '../containers/FloorMap';
import FixedButton from '../components/FixedButton';
import EventList from '../components/EventList';
import FilterMenu from '../components/FilterMenu';

const EventsComponent = () => {
  const dispatchFloorMap = useFloorMapDispatcher();
  const [openFilter, setOpenFilter] = useState(false);
  const room = useFloorMapEntry();

  const { closeFloorMap, closeFilterMenu, showFilterMenu } = useMemo(() => {
    const closeFloorMap = () => dispatchFloorMap(null);
    const closeFilterMenu = () => setOpenFilter(false);
    const showFilterMenu = () => setOpenFilter(true);
    return { closeFloorMap, closeFilterMenu, showFilterMenu };
  }, []);

  const handler = room ? closeFloorMap : openFilter ? closeFilterMenu : showFilterMenu;

  return (
    <>
      <EventList />
      <FilterMenu open={!room && openFilter} />
      <FixedButton to={handler} type={room ? 'done' : openFilter ? 'done' : 'search'} />
    </>
  );
};

export default EventsComponent;
