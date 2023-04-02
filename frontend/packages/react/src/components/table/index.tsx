/* eslint-disable react/jsx-key */
import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import {
    Column,
    useTable,
    useSortBy,
    usePagination,
    useGlobalFilter,
    Row
} from 'react-table'
import {
    GotoPage,
    NextPage,
    Pagination,
    PreviousPage,
    Table
} from './style'

import GlobalFilter from '../globalFilter'

interface Props {
    columns: Column<any>[]
    data: {}[] | any
}

const TableComponent: React.FC<Props> = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
        setGlobalFilter,
        gotoPage,
        pageCount,
        setPageSize
    }: any = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination)

    const { pageIndex, pageSize, globalFilter } = state

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <Table {...getTableProps()}>
                <thead>
                    {
                        // Loop over the header rows
                        headerGroups.map((headerGroup: any) => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    // Loop over the headers in each row
                                    headerGroup.headers.map((column: any) => (
                                        // Apply the header cell props
                                        <th
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps()
                                            )}
                                        >
                                            {
                                                // Render the header
                                                column.render('Header')
                                            }
                                            {/* Add a sort direction indicator */}
                                            <span>
                                                {column.isSorted ? (
                                                    column.isSortedDesc ? (
                                                        <AiOutlineArrowUp />
                                                    ) : (
                                                        <AiOutlineArrowDown />
                                                    )
                                                ) : (
                                                    ''
                                                )}
                                            </span>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                {/* Apply the table body props */}
                <tbody {...getTableBodyProps()}>
                    {
                        // Loop over the table rows
                        page.map((row: Row<{}>) => {
                            // Prepare the row for display
                            prepareRow(row)
                            return (
                                // Apply the row props
                                <tr {...row.getRowProps()}>
                                    {
                                        // Loop over the rows cells
                                        row.cells.map(cell => {
                                            // Apply the cell props
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {
                                                        // Render the cell contents
                                                        cell.render('Cell')
                                                    }
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Pagination>
                <span>
                    {pageIndex + 1} de {pageOptions.length}
                </span>
                <GotoPage
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                >
                    {'<<'}
                </GotoPage>
                <PreviousPage
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    Anterior
                </PreviousPage>
                <NextPage onClick={() => nextPage()} disabled={!canNextPage}>
                    Proximo
                </NextPage>
                <GotoPage
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    {'>>'}
                </GotoPage>
            </Pagination>
        </>
    )
}

export default TableComponent
