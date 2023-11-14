import React from 'react';
import { SimpleTableProps } from '../Tables';
import numeral from 'numeral';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader/Loader';

const SimpleTable: React.FC<SimpleTableProps> = (props) => {

	const router = useRouter();

	return (
		<div className="flex flex-col">
			<div className="-m-1.5 overflow-x-auto">
				<div className="p-1.5 min-w-full inline-block align-middle">
					<div className="overflow-hidden">
						<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
							<thead>
								<tr>
									{
										props.columns.length > 0 && props.columns.map((column) => {
											return (
												<th
													key={column.id}
													scope="col"
													className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
												>{column.name}</th>
											)
										})
									}
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
								{
									props.isLoading ?
										<tr>
											<td
												colSpan={props.columns.length}
												className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 dark:text-gray-200"
											><Loader /></td>
										</tr>
										:
										props.rows.length > 0 && props.columns.length > 0 ? props.rows.map(row => {
											return (
												<tr style={{ cursor: props.linked ? "Pointer" : "" }} key={row.id} onClick={() => props.linked && router.push(row.uuid)}>
													{
														props.columns.map(column => {
															return (
																<td
																	key={column.id}
																	className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
																>{
																		column.price ? numeral(row[column.id]).format("$0,0.00") :
																			column.concat && column.concat.fields.length > 0 ? column.concat.fields.map((field: string) => row[field] + column.concat.separator) :
																				row[column.id]
																	}</td>
															)
														})
													}
												</tr>
											)
										}) :
											<tr>
												<td
													colSpan={props.columns.length}
													className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 dark:text-gray-200"
												>No se encontraron registros</td>
											</tr>
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SimpleTable;
