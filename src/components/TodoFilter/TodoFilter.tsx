import React, { memo } from 'react';

interface Props {
  query: string,
  selectFilterType: string,
  onInputChange: (value: string) => void,
  onChangeFilter: (str: string) => void,
}

export const TodoFilter: React.FC<Props> = memo(({
  query,
  onInputChange,
  selectFilterType,
  onChangeFilter,
}) => {
  const handleClickReset = () => onInputChange('');

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={selectFilterType}
            onChange={(event) => onChangeFilter(event.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={(event) => onInputChange(event.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {query && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={handleClickReset}
            />
          </span>
        )}
      </p>
    </form>
  );
});
