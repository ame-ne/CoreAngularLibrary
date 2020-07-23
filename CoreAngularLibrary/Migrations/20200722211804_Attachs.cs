using Microsoft.EntityFrameworkCore.Migrations;

namespace CoreAngularLibrary.Migrations
{
    public partial class Attachs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Blobs_Attachments_AttachmentId",
                table: "Blobs");

            migrationBuilder.DropIndex(
                name: "IX_Blobs_AttachmentId",
                table: "Blobs");

            migrationBuilder.DropColumn(
                name: "AttachmentId",
                table: "Blobs");

            migrationBuilder.AlterColumn<int>(
                name: "EntityId",
                table: "Attachments",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "BlobId",
                table: "Attachments",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Attachments_BlobId",
                table: "Attachments",
                column: "BlobId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Attachments_Blobs_BlobId",
                table: "Attachments",
                column: "BlobId",
                principalTable: "Blobs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attachments_Blobs_BlobId",
                table: "Attachments");

            migrationBuilder.DropIndex(
                name: "IX_Attachments_BlobId",
                table: "Attachments");

            migrationBuilder.DropColumn(
                name: "BlobId",
                table: "Attachments");

            migrationBuilder.AddColumn<int>(
                name: "AttachmentId",
                table: "Blobs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "EntityId",
                table: "Attachments",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateIndex(
                name: "IX_Blobs_AttachmentId",
                table: "Blobs",
                column: "AttachmentId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Blobs_Attachments_AttachmentId",
                table: "Blobs",
                column: "AttachmentId",
                principalTable: "Attachments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
