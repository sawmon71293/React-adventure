import React, { useState } from 'react';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>&lt;</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>&gt;</button>}
    </div>
  );
}
