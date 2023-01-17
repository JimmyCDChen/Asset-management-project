import { Table, Model, Column, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'assets',
})
export class Asset extends Model {

  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true, field: 'id' })
  id!: number;

  @Column({ type: DataType.STRING(50), allowNull: false, field: 'name' })
  name!: string;

  @Column({ type: DataType.FLOAT, field: 'booking_value' })
  bookingValue: number;

  @Column({ type: DataType.STRING(3), field: 'currency' })
  currency: string;

  @Column({ type: DataType.FLOAT, field: 'share_count' })
  shareCount: number;

  @Column({ type: DataType.FLOAT, field: 'share_price' })
  sharePrice: number;

  @Column({ type: DataType.STRING(12), allowNull: false, field: 'equity_type' })
  equityType!: Type;

  @CreatedAt
  @Column({ type: DataType.DATE, field: 'createAt' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE, field: 'updateAt' })
  updatedAt?: Date;
}

export enum Type {
  CASH = "CASH", SECURITIES = "SECURITIES"
}