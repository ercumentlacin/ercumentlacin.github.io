import cx from 'classnames';
import dayjs from 'dayjs';

import { acceptedTags } from '../../../constants/tagsConstants';

const Table = ({ tableData }) => (
  <table className='table-auto select-none'>
    <tbody>
      {tableData.map(({ id, title, icon, content }) => (
        <tr key={id}>
          <td className='space-x-2 text-sm text-gray-400'>
            <i className={icon} />
            <span>{title}</span>
          </td>

          {Array.isArray(content) ? (
            <td className='text-black text-base flex flex-wrap space-x-1 cursor-pointer p-2 rounded-sm hover:bg-gray-100'>
              {content
                .filter((tag) => acceptedTags.includes(tag.toLowerCase()))
                .map((tag) => {
                  const classNames = cx('tag text-sm', `tag-${tag}`);
                  return (
                    <span key={tag} className={classNames}>
                      {tag}
                    </span>
                  );
                })}
            </td>
          ) : (
            <td className='text-black text-sm'>
              {dayjs(content).format('MMMM DD, YYYY HH:mm')}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
