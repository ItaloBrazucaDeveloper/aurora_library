import { MapList } from '../map-list';
import { Show } from '../show';

import { DataTableActions } from './data-table-actions';
import { DataTableBody } from './data-table-body';
import { DataTableContainer } from './data-table-container';

import { DataTableField } from './data-table-field';
import { DataTableHeader } from './data-table-header';
import { DataTableRow } from './data-table-row';

interface DataTableProps {
	headers: string[];
	data?: {}[];
	onActionsClicked: (action: 'edit' | 'delete') => void;
}

export function DataTable({
	headers,
	data = [],
	onActionsClicked,
}: DataTableProps) {
	return (
		<DataTableContainer>
			<DataTableHeader>
				<DataTableField asHeader>#</DataTableField>
				<MapList
					list={headers}
					callback={(header) => (
						<DataTableField key={header} asHeader>
							{header}
						</DataTableField>
					)}
				/>
			</DataTableHeader>
			<DataTableBody>
				<Show condition={data?.length > 0}>
					<MapList
						list={data}
						callback={(row, index) => (
							<DataTableRow hoverEffect key={index}>
								<DataTableField>{index + 1}</DataTableField>
								{Object.values(row).map((field: any, fieldIndex) => (
									<DataTableField key={fieldIndex}>{field}</DataTableField>
								))}
								<DataTableActions
									dataRow={row}
									actions="edit-delete"
									onActionsClicked={onActionsClicked}
								/>
							</DataTableRow>
						)}
					/>
				</Show>
			</DataTableBody>
		</DataTableContainer>
	);
}
