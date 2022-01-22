using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PatronatGroup.EntityFramework.Migrations
{
    public partial class tClients : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "tToContactUs");

            migrationBuilder.DropColumn(
                name: "FullName",
                table: "tToContactUs");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "tToContactUs");

            migrationBuilder.AddColumn<int>(
                name: "ClientId",
                table: "tToContactUs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "tLawyers",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedOn",
                table: "tLawyers",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "tLawyers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "tClients",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tClients", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tToContactUs_ClientId",
                table: "tToContactUs",
                column: "ClientId");

            migrationBuilder.AddForeignKey(
                name: "FK_tToContactUs_tClients_ClientId",
                table: "tToContactUs",
                column: "ClientId",
                principalTable: "tClients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tToContactUs_tClients_ClientId",
                table: "tToContactUs");

            migrationBuilder.DropTable(
                name: "tClients");

            migrationBuilder.DropIndex(
                name: "IX_tToContactUs_ClientId",
                table: "tToContactUs");

            migrationBuilder.DropColumn(
                name: "ClientId",
                table: "tToContactUs");

            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "tLawyers");

            migrationBuilder.DropColumn(
                name: "DeletedOn",
                table: "tLawyers");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "tLawyers");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "tToContactUs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "tToContactUs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "tToContactUs",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
