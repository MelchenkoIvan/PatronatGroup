using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PatronatGroup.EntityFramework.Migrations
{
    public partial class UpdatedTToContactUs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "tToContactUs",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedOn",
                table: "tToContactUs",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "tToContactUs",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "tToContactUs");

            migrationBuilder.DropColumn(
                name: "DeletedOn",
                table: "tToContactUs");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "tToContactUs");
        }
    }
}
