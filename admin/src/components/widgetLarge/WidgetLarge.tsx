import './WidgetLarge.css';

const WidgetLarge: React.FC = (): JSX.Element => {
  const Button = ({ type }: { type: string }): JSX.Element => {
    return <button className={'widgetLargeButton ' + type}>{type}</button>;
  };

  return (
    <div className='widgetLarge'>
      <h3 className='widgetLargeTitle'>Latest Transactions</h3>
      <table className='widgetLargeTable'>
        <tbody>
          <tr className='widgetLargeTr'>
            <th className='widgetLargeTh'>Customer</th>
            <th className='widgetLargeTh'>Date</th>
            <th className='widgetLargeTh'>Amount</th>
            <th className='widgetLargeTh'>Status</th>
          </tr>
          <tr className='widgetLargeTr'>
            <td className='widgetLargeUser'>
              <img
                src='https://images.pexels.com/photos/1036645/pexels-photo-1036645.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt='Avatar'
                className='widgetLargeImg'
              />
              <span className='widgetLargeName'>Mike Doe</span>
            </td>
            <td className='widgetLargeDate'>2 Jun 2021</td>
            <td className='widgetLargeAmount'>$122.00</td>
            <td className='widgetLargeStatus'>
              <Button type='Approved' />
            </td>
          </tr>
          <tr className='widgetLargeTr'>
            <td className='widgetLargeUser'>
              <img
                src='https://images.pexels.com/photos/1036645/pexels-photo-1036645.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt='Avatar'
                className='widgetLargeImg'
              />
              <span className='widgetLargeName'>Mike Doe</span>
            </td>
            <td className='widgetLargeDate'>2 Jun 2021</td>
            <td className='widgetLargeAmount'>$122.00</td>
            <td className='widgetLargeStatus'>
              <Button type='Declined' />
            </td>
          </tr>
          <tr className='widgetLargeTr'>
            <td className='widgetLargeUser'>
              <img
                src='https://images.pexels.com/photos/1036645/pexels-photo-1036645.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt='Avatar'
                className='widgetLargeImg'
              />
              <span className='widgetLargeName'>Mike Doe</span>
            </td>
            <td className='widgetLargeDate'>2 Jun 2021</td>
            <td className='widgetLargeAmount'>$122.00</td>
            <td className='widgetLargeStatus'>
              <Button type='Pending' />
            </td>
          </tr>
          <tr className='widgetLargeTr'>
            <td className='widgetLargeUser'>
              <img
                src='https://images.pexels.com/photos/1036645/pexels-photo-1036645.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt='Avatar'
                className='widgetLargeImg'
              />
              <span className='widgetLargeName'>Mike Doe</span>
            </td>
            <td className='widgetLargeDate'>2 Jun 2021</td>
            <td className='widgetLargeAmount'>$122.00</td>
            <td className='widgetLargeStatus'>
              <Button type='Approved' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLarge;
