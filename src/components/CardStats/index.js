import React from "react";
import { Style } from "./styles";

const CardStats = props => {
  return (
    <Style.CardBoxStyle>
      <Style.Title>{props.title}</Style.Title>
      <Style.CardBoxStatsDefault>
        {(() => {
          switch (props.status) {
            case "recovered":
              return (
                <Style.CardBoxStatsRecovered>
                  {props.count}
                </Style.CardBoxStatsRecovered>
              );
            case "confirmed":
              return (
                <Style.CardBoxStatsConfirmed>
                  {props.count}
                </Style.CardBoxStatsConfirmed>
              );
            case "suspect":
              return (
                <Style.CardBoxStatsSuspect>
                  {props.count}
                </Style.CardBoxStatsSuspect>
              );
            case "death":
              return (
                <Style.CardBoxStatsDeath>{props.count}</Style.CardBoxStatsDeath>
              );
            default:
              return <div>{props.count}</div>;
          }
        })()}
      </Style.CardBoxStatsDefault>
    </Style.CardBoxStyle>
  );
};

export default CardStats;
