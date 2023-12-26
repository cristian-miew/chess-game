import { XCoordinates, YCoordinates, startPositions } from "./configs";
import './ChessBoard.modules.scss'
 
export default function ChessBoard() {
 
  return (
		<div className="board">
			{YCoordinates.map((y, i) => {
				return (
					<div className="row" key={i}>
						{XCoordinates.map((x, j) => {
							return (
								<div key={j} className="cell">
									<div className="piece" style={{ background: `var(--theme-piece-set-${startPositions[i][j]})` }}></div>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}
