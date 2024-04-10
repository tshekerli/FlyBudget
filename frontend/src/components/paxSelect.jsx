import React, { useState, useRef, useEffect } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button, ClickAwayListener } from '@mui/material';

export default function PaxSelect() {
  const [pax, setPax] = useState({ adults: 1, children: 0 });
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ display: "flex", flexDirection: "column" }}>
      <Button onClick={() => setOpen(!open)}>
        Passengers: {pax.adults + pax.children}
      </Button>
      {open && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div style={{display: 'flex', justifyContent:"center", alignItems:"center"}}>
            <div id="adults-select" className="passenger-type" style={{ display: "flex", flexDirection: "row" }}>
              <p>Adults</p>
              <Button
                id="adults-decrement"
                onClick={() => setPax({ ...pax, adults: pax.adults - 1 })}
                disabled={pax.adults === 0}
              >
                <RemoveIcon />
              </Button>
              <p id="adults-count">{pax.adults}</p>
              <Button id="adults-increment" onClick={() => setPax({ ...pax, adults: pax.adults + 1 })}>
                <AddIcon />
              </Button>
            </div>
            <div id="children-select" className="passenger-type" style={{ display: "flex", flexDirection: "row" }}>
              <p>Children</p>
              <Button
                id="children-decrement"
                onClick={() => setPax({ ...pax, children: pax.children - 1 })}
                disabled={pax.children === 0}
              >
                <RemoveIcon />
              </Button>
              <p id="children-count">{pax.children}</p>
              <Button id="children-increment" onClick={() => setPax({ ...pax, children: pax.children + 1 })}>
                <AddIcon />
              </Button>
            </div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}